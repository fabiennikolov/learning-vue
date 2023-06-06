import {
  defineConfig,
  presetAttributify, presetIcons, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'form-link': 'rounded-3 py-1 px-2 hover:bg-slate-5 b-white b-2 transition-colors-300' },
    { 'home-link': 'text-7.5 uppercase bg-white display-inline-block p-2 my-4 rounded-3 b-black b-2 hover:bg-slate-3 text-center' },
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
