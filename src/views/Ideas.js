import { h } from 'hyperapp';

export default ({ ideas }, {
  changeQuality,
  removeIdea,
}) => ideas.map((idea, index) => {
  const {
    title,
    body,
    quality,
  } = idea;

  return (
    <article class="idea-box">
      <h4 class={quality}>{title}</h4>
      <p>{body}</p>
      <div class="actions">
        <button
          id={index}
          class="add"
          onclick={changeQuality}
        >
          +
        </button>
        <button
          id={index}
          class="sub"
          onclick={changeQuality}
        >
          -
        </button>
        <button
          id={index}
          class="delete"
          onclick={removeIdea}
        >
          x
        </button>
      </div>
    </article>
  );
});
