
export const scroll = (gsap, videoRef) => {
  let video = videoRef.current
  let src = video.src
  let t = video.currentTime
  let once = {
    once : true
  }

  video.setAttribute("src", src);

  document.documentElement.addEventListener("touchstart", () => {
    video.load()
    video.pause()
  }, once)

  let tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      trigger: "#main",
      start: "0%",
      end: "400%",
      scrub: true,
      pin: true
    }
  })

  video.addEventListener("loadedmetadata", () => {
    tl.fromTo(
      video,
      {currentTime: 0},
      {currentTime: video.duration || 1}
    )
  }, once)
}
