// oop - abstraction

// idea
// implemenation pore krbo

/*

   1. interface
   2. abstract class
*/

// interface ModiaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// // Implementation
// class MusicPlayer implements ModiaPlayer {
//   play() {
//     console.log("Playing Music");
//   }
//   pause() {
//     console.log("Music paused... ");
//   }
//   stop() {
//     console.log(`Music stopped`);
//   }
// }

// const MezbaPlayer = new MusicPlayer(); // instance
// MezbaPlayer.play();
// MezbaPlayer.pause();
// MezbaPlayer.stop();

// .....................

// ? abstract

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

//implementation
class MezbaPlayer extends MediaPlayer {
  play(): void {
    console.log(`Playing music...`);
  }
  pause(): void {
    console.log("Music is paused !");
  }
  stop(): void {
    console.log("Music is stopped !");
  }
}

const mezbaPlayer1 = new MezbaPlayer();
mezbaPlayer1.play();
mezbaPlayer1.pause();
mezbaPlayer1.stop();
