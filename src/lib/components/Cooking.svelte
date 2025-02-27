<script lang="ts">
</script>

<section class="cooking">
  <div class="inner">
    <div class="block"><a href="/portfolio"><img src="/img/pan.png" alt="Cooking" /></a></div>
    <div class="block">
      <h2>Tap the lid to see the flavors we've cooked</h2>
    </div>
  </div>
</section>

<style lang="scss">
  @import 'src/scss/app.scss'; // Adjust the path as necessary

  .cooking {
    min-height: 100vh;
    padding: 5rem 0;
    .inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      @include small {
        flex-direction: column;
        padding: 0 2rem;
      }

      .block {
        flex: 1;
        display: flex;
        align-items: center;
      }
      h2 {
        font-size: 4rem;
        color: $purple;
        max-width: 500px;
        @include mobile {
          font-size: 3rem;
        }
      }
      img {
        width: 100%;
        max-width: 600px;
        height: auto;
        border-radius: 1rem;
      }
    }
  }
</style>
