<script setup>

</script>

<template>
    <div class="flex h-screen w-screen bg-red-300/50">
        <div class="m-auto flex w-[80vw] h-[80vh] bg-red-500">
            <div class="flex flex-col justify-end w-1/2 h-full bg-red-300">
                <div class="text-center mb-[100px]">Hello World</div>
            </div>
            <div class="w-1/2 p-[40px] h-full bg-white">
                <div class="flex flex-col gap-">
                    <div class="flex flex-col">
                        <label for="name">Name</label>
                        <UInput id="name" label="Name" type="text" />
                    </div>
                    <div class="flex flex-col">
                        <label for="email">Email</label>
                        <UInput id="email" label="Email" type="email" />
                    </div>
                    <div class="flex flex-col">
                        <label for="phone">Phone</label>
                        <UInput id="phone" label="Phone" type="tel" />
                    </div>
                    <div class="flex flex-col">
                        <label for="password">Password</label>
                        <UInput id="password" label="Password" type="password" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
