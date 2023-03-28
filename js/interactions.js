LottieInteractivity.create({
    mode: 'scroll',
    player: '#lottie-lighthouse',
    actions: [
        {
          visibility: [0,1],
          type: 'seek',
          frames: [0, 300],
        },
      ],
  });

  LottieInteractivity.create({
    player: "#blueprint-lottie",
    mode:"cursor",
    actions: [
        {
            position: { x: [0, 1], y: [0, 1] },
            type: "seek",
            frames: [0, 42]
        }
    ]
});
