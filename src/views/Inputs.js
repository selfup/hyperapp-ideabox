import { h } from 'hyperapp';

export default ({ body, title }, {
  updateField,
  submit,
}) =>
  <div class="inputs">
    <div class="form">
      <input
        id="title"
        placeholder="title"
        value={title}
        onkeyup={updateField}
      />
      <br />
      <input
        id="body"
        placeholder="body"
        value={body}
        onkeyup={updateField}
      />
      <br />
      <br />
      <button
        class="submit"
        onclick={submit}
      >
        Submit
      </button>
    </div>
    <br />
  </div>;
