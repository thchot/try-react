import React from 'react';

import Button from '@material-ui/core/Button';

export default {
  title: 'App/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Submit',
};

