import test from 'ava';
import { JSDOM } from 'jsdom';
import { spy } from 'sinon';
import { writeToDocument } from '../js/writeToDocument';

const event = {
  preventDefault: spy()
}

test('writeToDocument', async t => {
  await JSDOM.fromFile('./index.html').then(({ window: { document }}) => {
    global.document = document;
    writeToDocument(event, 'test', 'button-danger');
    const p = document.querySelector('p');
    t.is(p.innerHTML, 'test');
    t.true(p.classList.contains('button-danger'));
    t.true(event.preventDefault.calledOnce);
  });
});
