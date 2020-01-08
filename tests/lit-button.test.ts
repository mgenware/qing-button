/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import '../dist/main';

it('Content slot', async () => {
  const el = await fixture(html`
    <lit-button><p>test</p></lit-button>
  `);

  expect(el.innerHTML).to.eq('<p>test</p>');
});

it('click event', async () => {
  const el = (await fixture(html`
    <lit-button></lit-button>
  `)) as HTMLElement;

  const listener = oneEvent(el, 'click');
  el.shadowRoot!.querySelector('button')!.click();
  const { detail, composed, bubbles } = await listener;
  expect(detail).to.eq(0);
  expect(composed).to.eq(true);
  expect(bubbles).to.eq(true);
});
