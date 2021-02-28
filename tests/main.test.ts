/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-duplicates */
import { html, fixture, expect, oneEvent, aTimeout } from '@open-wc/testing';
import '..';
import QingButton from '../dist/main';

it('Content slot', async () => {
  const el = await fixture(html` <qing-button><p>test</p></qing-button> `);

  expect(el.innerHTML).to.eq('<p>test</p>');
});

it('Click event', async () => {
  const el = await fixture<QingButton>(html` <qing-button></qing-button> `);

  const listener = oneEvent(el, 'click');
  el.shadowRoot!.querySelector('button')!.click();
  const { detail, composed, bubbles } = await listener;
  expect(detail).to.eq(null);
  expect(composed).to.eq(false);
  expect(bubbles).to.eq(false);
});

it('Autofocus', async () => {
  const el = await fixture<QingButton>(html` <qing-button autofocus></qing-button> `);

  await aTimeout(50);
  expect(document.activeElement).to.eq(el);
});

it('Checkbox', async () => {
  const el = await fixture<QingButton>(html` <qing-button canSelect></qing-button> `);
  expect(el.selected).to.eq(false);

  const btnElement = el.shadowRoot!.querySelector('button')!;
  btnElement.click();
  await aTimeout(50);
  expect(el.hasAttribute('selected')).eq(true);
  expect(el.selected).to.eq(true);

  btnElement.click();
  await aTimeout(50);
  expect(el.hasAttribute('selected')).eq(false);
  expect(el.selected).to.eq(false);
});

it('Checkbox (selected)', async () => {
  const el = await fixture<QingButton>(html` <qing-button canSelect selected></qing-button> `);
  expect(el.selected).to.eq(true);

  const btnElement = el.shadowRoot!.querySelector('button')!;
  btnElement.click();
  await aTimeout(50);
  expect(el.hasAttribute('selected')).eq(false);
  expect(el.selected).to.eq(false);

  btnElement.click();
  await aTimeout(50);
  expect(el.hasAttribute('selected')).eq(true);
  expect(el.selected).to.eq(true);
});
