/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import '../dist/main';

it('Content slot', async () => {
  const el = await fixture(html` <qing-button><p>test</p></qing-button> `);

  expect(el.innerHTML).to.eq('<p>test</p>');
});

it('Click event', async () => {
  const el = (await fixture(html`
    <qing-button></qing-button>
  `)) as HTMLElement;

  const listener = oneEvent(el, 'click');
  el.shadowRoot!.querySelector('button')!.click();
  const { detail, composed, bubbles } = await listener;
  expect(detail).to.eq(0);
  expect(composed).to.eq(true);
  expect(bubbles).to.eq(true);
});
