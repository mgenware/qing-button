/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-duplicates */
import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import '..';

it('Content slot', async () => {
  const el = await fixture(html` <qing-button><p>test</p></qing-button> `);

  expect(el.innerHTML).to.eq('<p>test</p>');
});

it('Click event', async () => {
  const el = (await fixture(html` <qing-button></qing-button> `)) as HTMLElement;

  const listener = oneEvent(el, 'click');
  el.shadowRoot!.querySelector('button')!.click();
  const { detail, composed, bubbles } = await listener;
  expect(detail).to.eq(null);
  expect(composed).to.eq(false);
  expect(bubbles).to.eq(false);
});
