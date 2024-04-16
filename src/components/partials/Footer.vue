<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="shadow bg-zinc-950">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a
          href="#"
          class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img
            src="../../../public/logo.png"
            class="h-10"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Word Game</span
          >
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">{{ $t('footer.about') }}</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">{{ $t('footer.privacy_police') }}</a>
          </li>
          <li>
            <a href="#" class="hover:underline me-4 md:me-6">{{ $t('footer.licensing') }}</a>
          </li>
          <li>
            <a href="#" class="hover:underline">{{ $t('footer.contact') }}</a>
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023 <a href="#" class="hover:underline">Word Game™</a>. {{ $t('footer.all_rights_reserved') }} </span
      >
    </div>
  </footer>
</template>


<style>
</style>