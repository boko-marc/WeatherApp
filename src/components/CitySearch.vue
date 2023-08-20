<template>
  <div>
    <section class="text-gray-600 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <div class="flex w-full md:justify-start justify-center items-center">
            <div class="relative mr-4">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="Veuillez saisir la ville"
                class="bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'CitySearch',
//   props: {
//     msg: String
//   }
}
</script>

