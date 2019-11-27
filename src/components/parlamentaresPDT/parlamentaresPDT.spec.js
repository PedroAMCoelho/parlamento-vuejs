import Vue from 'vue';
import parlamentaresPDTComponent from './ParlamentaresPDT.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('parlamentaresPDTComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    // expect(typeof parlamentaresPDTComponent.created).toBe('function');
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    // expect(typeof parlamentaresPDTComponent.data).toBe('function')
    // const defaultData = parlamentaresPDTComponent.data();
    // expect(defaultData.message).toBe('hello!');
  })
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    // const vm = new Vue(parlamentaresPDTComponent).$mount();
    // expect(vm.message).toBe('bye!');
  })
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    // const Ctor = Vue.extend(parlamentaresPDTComponent);
    // const vm = new Ctor().$mount();
    // expect(vm.$el.textContent).toBe('bye!');
  })
})