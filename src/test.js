import test from 'ava'
import getColorName from './index'

test('it doesn\'t break because of parsing errors', t => {
  t.is(getColorName('#'), '')
  t.is(getColorName('test'), '')
})

test('web color matches', t => {
  // `color-string` leads with these
  // https://lists.w3.org/Archives/Public/www-style/2014Jun/0312.html
  t.is(getColorName('#663399'), 'rebeccapurple')
})

test('Exact matches vs. variations', t => {
  t.is(getColorName('#0D1117'), 'Bunker') // exact match
  t.is(getColorName('#0D1118'), 'Bunker')
  t.is(getColorName('#0D1116'), 'Bunker')
})

test('not only HEX supported', t => {
  t.is(getColorName('rgb(13,17,23)'), 'Bunker')
})

test('web safe option (slug style output)', t => {
  t.is(getColorName('#FFB97B', true), 'macaroni-and-cheese')
  t.is(getColorName('#66FF66', true), 'screamin-green')
})
