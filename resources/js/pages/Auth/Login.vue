<template>
  <div>
    <DarkModeSwitcher />
    <div class="container sm:px-10">
      <div class="block xl:grid grid-cols-2 gap-4">
        <!-- BEGIN: Login Info -->
        <div class="hidden xl:flex flex-col min-h-screen">
          <a href="" class="-intro-x flex items-center pt-5">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="w-6"
              src="/images/logo.svg"
            />
            <span class="text-white text-lg ml-3">
              Books
              <!-- Books <span class="font-bold">Checkout</span> -->
            </span>
          </a>
          <div class="my-auto">
            <img
              alt="Icewall Tailwind HTML Admin Template"
              class="-intro-x w-10/12 -mt-16 -ml-16"
              src="/images/clip-reading-a-book.png"
            />
            <!-- <div
                            class="-intro-x text-white font-medium text-4xl leading-tight mt-10"
                        >
                            A few more clicks to <br />
                            sign in to your account.
                        </div>
                        <div
                            class="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500"
                        >
                            Manage all your e-commerce accounts in one place
                        </div> -->
          </div>
        </div>
        <!-- END: Login Info -->
        <!-- BEGIN: Login Form -->
        <form
          class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0"
          @submit.prevent="submit"
        >
          <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
          </div>
          <div
            class="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto"
          >
            <!-- <jet-validation-errors class="mb-4" /> -->
            <h2
              class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
            >
              Sign In
            </h2>
            <div class="intro-x mt-8">
              <input
                type="email"
                class="intro-x login__input form-control py-3 px-4 border-gray-300 block"
                placeholder="Email"
                v-model="form.email"
                required
                autofocus
              />
              <input
                type="password"
                class="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4"
                placeholder="Password"
                v-model="form.password"
                required
                autocomplete="current-password"
              />
            </div>
            <div
              class="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4"
            >
              <div class="flex items-center mr-auto">
                <input
                  id="remember-me"
                  type="checkbox"
                  class="form-check-input border mr-2"
                  v-model="form.remember"
                />
                <label class="cursor-pointer select-none" for="remember-me">
                  Remember me
                </label>
              </div>
              <!-- <inertia-link
                v-if="canResetPassword"
                :href="route('password.request')"
                class="underline text-sm text-gray-600 hover:text-gray-900"
              >
                Forgot Password?
              </inertia-link> -->
            </div>
            <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
              <button
                type="submit"
                class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
              >
                Login
              </button>
              <button
                class="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top"
              >
                Sign up
              </button>
            </div>
            <div
              class="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left"
            >
              By signin up, you agree to our <br />
              <a class="text-theme-1 dark:text-theme-10" href="">
                Terms and Conditions
              </a>
              &
              <a class="text-theme-1 dark:text-theme-10" href="">
                Privacy Policy
              </a>
            </div>
          </div>
        </form>
        <!-- END: Login Form -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, ref } from 'vue'
import { required, email } from '@vuelidate/validators'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { helper as $h } from '@/utils/helper'
import useVuelidate from '@vuelidate/core'
import DarkModeSwitcher from '@/components/DarkModeSwitcher.vue'
import Auth from '@/services/auth'

export default defineComponent({
  components: {
    DarkModeSwitcher
  },

  props: {
    canResetPassword: Boolean,
    status: String
  },

  setup() {
    onMounted(() => {
      cash('body')
        .removeClass('main')
        .removeClass('error-page')
        .addClass('login')
    })

    const store = useStore()
    const router = useRouter()

    const error = ref(null)
    const form = reactive({
      email: '',
      password: '',
      remember: false
    })

    const rules = {
      email: { required, email },
      password: { required }
    }

    const validate = useVuelidate(rules, toRefs(form))

    const submit = async () => {
      validate.value.$touch()
      if (!validate.value.$invalid) {
        error.value = null

        try {
          await Auth.login({ ...form, remember: form.remember ? 'on' : '' })
          const authUser = await store.dispatch('auth/getAuthUser')
          if (authUser) {
            store.dispatch('auth/setGuest', { value: 'isNotGuest' })
            router.replace({ name: 'dashboard' })
          } else {
            const error = Error(
              'Unable to fetch user after login, check your API settings.'
            )
            error.name = 'Fetch User'
            throw error
          }
        } catch (error) {
          error.value = $h.getError(error)
        }
      }
    }

    return { form, submit, validate }
  }
})
</script>
