import Vue from 'vue';
import parlamentaresNOVOComponent from './parlamentaresNOVO.vue';

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('parlamentaresNOVOComponent', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    // expect(typeof parlamentaresNOVOComponent.created).toBe('function');
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    // expect(typeof parlamentaresNOVOComponent.data).toBe('function')
    // const defaultData = parlamentaresNOVOComponent.data();
    // expect(defaultData.message).toBe('hello!');
  })
  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    // const vm = new Vue(parlamentaresNOVOComponent).$mount();
    // expect(vm.message).toBe('bye!');
  })
  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    // const Ctor = Vue.extend(parlamentaresNOVOComponent);
    // const vm = new Ctor().$mount();
    // expect(vm.$el.textContent).toBe('bye!');
  })
})