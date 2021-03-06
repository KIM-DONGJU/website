import Home from "./index.vue";

export default {
  title: "Pages/Home",
  component: Home,
  argTypes: {},
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Home },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Home v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {};
