import Main from "./components/Main";
import Form from "./components/Form";

import Field from "./components/Field";

function App() {
  return (
    <Main>
      <Form>
        <Field.Text label="Email" type="email" name="email"/> 
        {/* União Label + Input */}
      </Form>
    </Main>
  );
}

export default App;
