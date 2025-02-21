<script lang="ts">
  //   import { turnstile } from '@svelte-put/cloudflare-turnstile';

  // Page Server Load
  export let data;

  let statusMessage = '';
  let statusClass = ''; // To dynamically apply CSS classes for success/error
  let isSubmitting = false; // Tracks whether the form is submitting

  const submitForm = async (event) => {
    event.preventDefault();
    isSubmitting = true; // Start loading

    const formData = new FormData(event.target);

    try {
      const response = await fetch('/api/submit-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      const result = await response.json();

      // Handle specific error types
      if (result.success) {
        statusMessage = 'Your message has been sent';
        statusClass = 'success';
      } else if (result.error === 'captcha_failed') {
        statusMessage = 'Captcha error'; // Specific CAPTCHA failure message
        statusClass = 'error';
      } else {
        statusMessage = 'Your message did not send'; // General error message
        statusClass = 'error';
      }
    } catch (error) {
      statusMessage = 'Network error'; // Network or unexpected error
      statusClass = 'error';
    } finally {
      isSubmitting = false;
    }
  };
</script>

<svelte:head>
  <title>Contact - Flavored and Branded</title>
  <meta property="og:title" content="Contact - Flavored and Branded" />
  <meta name="description" content="" />
  <meta property="og:description" content="/" />
</svelte:head>

<section class="contact">
  <div class="inner">
    <div class="column">
      <div class="info">
        <h1>Contact</h1>
        <p>Contact us</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/sjo-baggen-2b131626/">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:hello@flavoredandbranded.com">hello@flavoredandbranded.com</a>
          </li>
          <li class="">
            <a href="tel:+31615058040">+31 (0)6 15058040</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="column">
      <form class="form" on:submit={submitForm}>
        <h2>Copntact formulier</h2>
        <div class="form-control two-controls">
          <div class="first">
            <label for="firstName">
              First name
              <span>*</span>
            </label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div class="second">
            <label for="lastName">
              Last name
              <span>*</span>
            </label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div class="form-control">
          <label for="email">
            Email
            <span>*</span>
          </label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-control two-controls">
          <div class="first">
            <label for="phone">
              Phone number
              <span>*</span>
            </label>
            <input type="tel" id="phone" name="phone" required />
          </div>
        </div>
        <div class="form-control">
          <label for="message">Message</label>
          <textarea id="message" name="message" cols="30" rows="3"></textarea>
        </div>
        <div class="form-control">
          <!-- <div
            use:turnstile
            turnstile-sitekey="1x00000000000000000000AA"
            turnstile-theme="light"
            turnstile-size="normal">
          </div> -->
        </div>
        <div class="form-control">
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </div>
        <div class="form-control">
          {#if isSubmitting}
            <div class="sending-animation">
              <div class="spinner"></div>
              <p>Sending</p>
            </div>
          {/if}
          <!-- Message Display -->
          {#if statusMessage}
            <p class="status-message {statusClass}">{statusMessage}</p>
          {/if}
        </div>
      </form>
    </div>
  </div>
</section>

<style lang="scss">
  @import 'src/scss/app.scss'; // Adjust the path as necessary

  section {
    .inner {
      display: flex;
      max-width: 1280px;
      margin: 0 auto;
      padding: 5rem 1rem;
      gap: 2rem;

      @include mobile {
        flex-direction: column;
      }

      .column {
        flex: 1;
      }
      h1 {
        margin-bottom: 1rem;
        color: $purple;
        font-size: 42px;
      }
      h2 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: $purple;
        font-size: 24px;
      }
      p {
        margin-bottom: 1rem;
      }

      a {
        color: $purple;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    background: white;
    // @include mobile {
    //   margin-left: 0;
    // }
    .form-control {
      margin: 15px 0px;
      &.two-controls {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        > div {
          width: 100%;
        }
      }
      label {
        display: block;
        color: $purple;
        font-size: 12px;
        text-transform: uppercase;
      }
      input,
      select {
        min-height: 35px;
      }
      input[type='date'],
      input[type='text'],
      input[type='email'],
      input[type='tel'] {
        width: 100%;
        margin-top: 5px;
        padding: 0px 5px 5px 0px;
        border: 0px solid transparent;
        border-bottom: 1px solid #cdcdcd;
        border-radius: 0;
        outline: 0;
        background: transparent;
        color: $purple;
        font-family: Lato, sans-serif;
        font-size: 18px;
      }
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type='number'] {
        appearance: textfield;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        border: 0;
        background: $purple;
        color: $white;
        text-transform: uppercase;
        appearance: none;
      }

      :global(button:disabled) {
        opacity: 0.5;
        pointer-events: none;
      }

      select {
        width: 100%;
        margin-top: 5px;
        padding: 0px 5px 5px 0px;
        border: 0px solid transparent;
        border-bottom: 1px solid #cdcdcd;
        outline: 0;
        background: transparent;
        color: $purple;
        font-family: Lato, sans-serif;
        font-size: 18px;
      }
      textarea {
        width: 100%;
        padding-top: 5px;
        border: 0px solid transparent;
        border-bottom: 1px solid #cdcdcd;
        outline: 0px;
        background: transparent;
        color: $purple;
        font-family: Lato, sans-serif;
        font-size: 18px;
        line-height: 20px;
        resize: none;
      }
    }
  }
  .sending-animation {
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 400px;
  }
  .spinner {
    width: 1.5rem;
    height: 1.5rem;
    animation: spin 1s linear infinite;
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top: 3px solid #333;
    border-radius: 50%;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
