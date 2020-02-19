import React from 'react';
// step 1, without reexporting:
// import SharedButton from '@example/shared/src/components/SharedButton';
// step 2, with reexporting:
import { SharedButton } from '@example/shared/src';
// the question is, how to get rid of src part too? so that the import would look like that:
// import { SharedButton } from '@example/shared';

const App = () => {
    return (
        <div>
            <h1>Hello there!</h1>
            <SharedButton />
        </div>
    )
};

export default App;
