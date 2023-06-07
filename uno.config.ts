import {
  defineConfig,
  presetAttributify, presetIcons, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'form-link': 'rounded-3 py-1 px-2 hover:bg-slate-5 b-white b-2 transition-colors-300' },
    { 'home-link': 'transition-all-300 hover:scale-105 text-6 uppercase bg-white display-inline-block p-1 my-2 rounded-3 b-black b-2 hover:bg-slate-3 text-center' },
    { 'social-link': 'text-blue-7 hover:(text-red-5 no-underline)' },
    [/btn-(big-)?(.*)/, ([, size, style]) => `bg-${style} rounded-4 ${size?.includes('big') ? 'text-lg px-5 py-4' : 'px-4 py-3'} border-2 border-${style}-2`],
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
