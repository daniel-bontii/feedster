$(document).ready(() => {
  $(".menu").on("mouseenter", () => {
    $(".nav-menu").show();
  });
  $(".nav-menu").on("mouseleave", () => {
    $(".nav-menu").hide();
  });
  $(".btn")
    .on("mouseenter", (event) => {
      $(event.currentTarget).addClass("btn-hover");
    })
    .on("mouseleave", () => {
      $(event.currentTarget).removeClass("btn-hover");
    });
  $(".postText").on("keyup", (event) => {
    const post = $(event.currentTarget).val();
    let remaining = 140 - post.length;
    if (remaining <= 0) {
      $(".wordcount").addClass("red");
      $(".postText").on("keypress", (event) => {
        event.preventDefault();
      });
    } else {
      $(".wordcount").removeClass("red");
      $(".postText").unbind("keypress").keypress();
    }
    $(".characters").html(remaining);
  });
  $(".postText").focus();
});
