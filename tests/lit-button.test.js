import { html, fixture, expect, oneEvent } from '@open-wc/testing';
import '../dist/main';

it('Content slot', async () => {
  const ele = await fixture(html`
    <lit-button><p>test</p></lit-button>
  `);

  expect(ele.innerHTML).to.eq('<p>test</p>');
});

it('click event', async () => {
  const ele = await fixture(html`
    <lit-button></lit-button>
  `);

  const listener = oneEvent(ele, 'click');
  ele.shadowRoot.querySelector('button').click();
  const { detail, composed, bubbles } = await listener;
  expect(detail).to.eq(0);
  expect(composed).to.eq(true);
  expect(bubbles).to.eq(true);
});
