// import React, { Component, RefObject } from "react";
// import lottie, { AnimationItem } from "lottie-web";

// interface AnimationData {
//   v: string;
//   ip: number;
//   op: number;
//   // Add more properties as needed
// }

// interface LottiePlayerProps {
//   animationData: AnimationData;
//   loop?: boolean;
//   autoplay?: boolean;
//   speed?: number;
//   width?: string | number;
//   height?: string | number;
// }

// class LottiePlayer extends Component<LottiePlayerProps> {
//   private lottieRef: RefObject<HTMLDivElement>;
//   private lottie: AnimationItem | undefined;

//   constructor(props: LottiePlayerProps) {
//     super(props);
//     this.lottieRef = React.createRef();
//   }

//   componentDidMount() {
//     const { animationData, loop, autoplay, speed } = this.props;
//     this.lottie = lottie.loadAnimation({
//       container: this.lottieRef.current!,
//       renderer: "svg", // or "canvas" or "html"
//       loop: loop === undefined ? true : loop,
//       autoplay: autoplay === undefined ? true : autoplay,
//       animationData: animationData,
//     });
//     this.lottie.setSpeed(speed || 1);
//   }

//   componentWillUnmount() {
//     if (this.lottie) {
//       this.lottie.destroy();
//     }
//   }

//   render() {
//     const { width, height } = this.props;
//     return (
//       <div
//         ref={this.lottieRef}
//         style={{ width: width || "100%", height: height || "100%" }}
//       />
//     );
//   }
// }

// export default LottiePlayer;


import React, { Component, RefObject } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface AnimationData {
  v: string;
  ip: number;
  op: number;
  // Add more properties as needed
}

interface LottiePlayerProps {
  animationData: AnimationData;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  width?: string | number;
  height?: string | number;
  isSidebarMinimized?: boolean;
  className?: string;
}

class LottiePlayer extends Component<LottiePlayerProps> {
  private lottieRef: RefObject<HTMLDivElement>;
  private lottie: AnimationItem | undefined;

  constructor(props: LottiePlayerProps) {
    super(props);
    this.lottieRef = React.createRef();
  }

  componentDidMount() {
    const { animationData, loop, autoplay, speed } = this.props;
    this.lottie = lottie.loadAnimation({
      container: this.lottieRef.current!,
      renderer: "svg", // or "canvas" or "html"
      loop: loop === undefined ? true : loop,
      autoplay: autoplay === undefined ? true : autoplay,
      animationData: animationData,
    });
    this.lottie.setSpeed(speed || 1);
  }

  componentWillUnmount() {
    if (this.lottie) {
      this.lottie.destroy();
    }
  }

  render() {
    const { width, height, isSidebarMinimized } = this.props;
    const iconClassName = isSidebarMinimized ? "minimized-icon" : "";

    return (
      <div
        ref={this.lottieRef}
        style={{ width: width || "100%", height: height || "100%" }}
        className={iconClassName} // Apply the class conditionally
      />
    );
  }
}

export default LottiePlayer;
