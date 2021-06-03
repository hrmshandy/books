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
                            Books <!-- Books <span class="font-bold">Checkout</span> -->
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
                <form class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0" @submit.prevent="submit">
                    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
                        {{ status }}
                    </div>
                    <div
                        class="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto max-w-sm"
                    >
                        <jet-validation-errors class="mb-4" />
                        <h2
                            class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"
                        >
                            Forgot your password?
                        </h2>
                        <div
                            class="intro-x mt-2 text-gray-500"
                        >
                            No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                        </div>
                        <div class="intro-x mt-8">
                            <input
                                type="email"
                                class="intro-x login__input form-control py-3 px-4 border-gray-300 block"
                                placeholder="Email"
                                v-model="form.email"
                                required
                                autofocus
                            />
                        </div>
                        <div
                            class="intro-x mt-5 xl:mt-8 text-center xl:text-left"
                        >
                            <button
                                type="submit"
                                class="btn btn-primary py-3 px-4 w-full xl:mr-3 align-top"
                                :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing"
                            >
                                Email Password Reset Link
                            </button>
                        </div>
                    </div>
                </form>
                <!-- END: Login Form -->
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useForm } from '@inertiajs/inertia-vue3';
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import JetValidationErrors from '@/Jetstream/ValidationErrors'

export default defineComponent({
    components: {
        DarkModeSwitcher,
        JetValidationErrors,
    },

    props: {
        canResetPassword: Boolean,
        status: String
    },

    setup() {

        onMounted(() => {
            cash("body")
                .removeClass("main")
                .removeClass("error-page")
                .addClass("login");
        });

        const form = useForm({
            email: ''
        })

        function submit() {
            form.post(this.route('password.email'))
        }

        return { form, submit }
    },
});
</script>
