import {
  defineConfig,
  presetAttributify, presetIcons, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'form-link': 'rounded-3 py-1 px-2 hover:bg-slate-5 b-gray b-1 transition-colors-300' },
    { 'home-link': 'text-sm transition-all-500 hover:scale-105 text-6 uppercase bg-white display-inline-block p-1 my-2 b-black b-2 hover:bg-slate-3 text-center b-transparent rounded-2 drop-shadow-md' },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetWebFonts(),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
