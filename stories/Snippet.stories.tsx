import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Snippet, { SnippetProps } from '../components/Snippet/Snippet';

export default {
    title: 'Components/Snippet',
    component: Snippet,
} as Meta;

const Template: StoryFn<SnippetProps> = (args) => <Snippet {...args} />;

export const JavaScriptSnippet = Template.bind({});
JavaScriptSnippet.args = {
    language: 'javascript',
    code: `
        import React from 'react';
        import ReactDOM from 'react-dom';

    const App = () => (
        <div>
            <h1>Hello, world!</h1>
        </div>
    );

    ReactDOM.render(<App />, document.getElementById('root'));
    `,
};

export const PythonSnippet = Template.bind({});
PythonSnippet.args = {
    language: 'python',
    code: `
        def hello_world():
            print("Hello, world!")

        if __name__ == "__main__":
            hello_world()
    `,
};
