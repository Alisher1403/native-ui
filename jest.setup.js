jest.mock('react-native-reanimated', () => {
  const React = require('react');
  const { View } = require('react-native');

  const identity = value => value;
  const animatedValue = value => ({ value });
  class Keyframe {
    constructor(config) {
      this.config = config;
    }
    duration() {
      return this;
    }
    easing() {
      return this;
    }
  }

  return {
    __esModule: true,
    default: {
      View,
      ScrollView: View,
      createAnimatedComponent: Component => Component,
    },
    createAnimatedComponent: Component => Component,
    useSharedValue: value => animatedValue(value),
    useDerivedValue: updater => animatedValue(updater()),
    useAnimatedStyle: updater => updater(),
    useAnimatedProps: updater => updater(),
    useAnimatedReaction: jest.fn(),
    useAnimatedRef: () => React.createRef(),
    useAnimatedScrollHandler: handler => handler,
    useAnimatedKeyboard: () => ({
      height: animatedValue(0),
      state: animatedValue(0),
    }),
    useReducedMotion: () => false,
    withTiming: identity,
    withSpring: identity,
    withDelay: (_delay, value) => value,
    withSequence: (...values) => values[values.length - 1],
    withRepeat: value => value,
    cancelAnimation: jest.fn(),
    runOnJS: fn => fn,
    runOnUI: fn => fn,
    interpolate: jest.fn(),
    interpolateColor: jest.fn(),
    Keyframe,
    Extrapolation: {
      CLAMP: 'clamp',
    },
    Easing: {
      linear: identity,
      ease: identity,
      inOut: identity,
      out: identity,
      elastic: identity,
      back: identity,
    },
  };
});

jest.mock('react-native-unistyles', () => {
  const theme = {
    colors: {
      'system/white': '#FFFFFF',
      'system/page': '#F0F2F4',
      'main/primary': '#20A96F',
      'main/label': '#111827',
      'main/label-secondary': '#9CA3AF',
      'main/error': '#FF005E',
      'gray/200': '#E5E7EB',
    },
    spacing: {
      0: 0,
      xs: 2,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      xxl: 20,
      xxxl: 24,
    },
    radius: {
      0: 0,
      xs: 2,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      xxl: 20,
      xxxl: 24,
      full: 9999,
    },
    size: value => value,
    fontSize: {
      xs: 10,
      sm: 12,
      base: 14,
      md: 16,
      lg: 20,
      xl: 24,
      xxl: 28,
      xxxl: 32,
    },
    fontFamily: {
      Inter_400: 'System',
      Inter_500: 'System',
      Inter_600: 'System',
      Inter_700: 'System',
      Unbounded_400: 'System',
      Unbounded_500: 'System',
      Unbounded_600: 'System',
      Unbounded_700: 'System',
    },
    alpha: color => color ?? 'transparent',
  };
  const runtime = {
    insets: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  const createStyleSheet = styles =>
    typeof styles === 'function'
      ? styles(theme, runtime)
      : styles;

  const computed = input => {
    const sheet = createStyleSheet(input);
    if (sheet && typeof sheet === 'object') {
      Object.values(sheet).forEach(value => {
        if (value && typeof value === 'object' && typeof value.useVariants !== 'function') {
          value.useVariants = () => value;
        }
      });
    }

    return sheet;
  };

  return {
    StyleSheet: {
      configure: jest.fn(),
      create: input => computed(input),
    },
    useUnistyles: () => ({
      theme,
    }),
  };
});

jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  const { View } = require('react-native');

  return {
    GestureHandlerRootView: View,
    GestureDetector: ({ children }) => children,
    Gesture: {
      Pan: () => ({
        enabled() {
          return this;
        },
        onBegin() {
          return this;
        },
        onStart() {
          return this;
        },
        onUpdate() {
          return this;
        },
        onEnd() {
          return this;
        },
        onFinalize() {
          return this;
        },
        activeOffsetX() {
          return this;
        },
        activeOffsetY() {
          return this;
        },
        failOffsetX() {
          return this;
        },
        failOffsetY() {
          return this;
        },
        simultaneousWithExternalGesture() {
          return this;
        },
      }),
    },
  };
});

jest.mock('react-native-keyboard-controller', () => {
  const React = require('react');
  const { ScrollView, View } = require('react-native');

  return {
    KeyboardProvider: ({ children }) => children,
    KeyboardAwareScrollView: React.forwardRef((props, ref) => <ScrollView ref={ref} {...props} />),
    KeyboardStickyView: View,
  };
});

jest.mock('@gorhom/bottom-sheet', () => {
  const React = require('react');
  const { ScrollView, TextInput, TouchableOpacity, View } = require('react-native');

  const BottomSheetModal = React.forwardRef(({ children }, ref) => <View ref={ref}>{children}</View>);

  return {
    BottomSheetModal,
    BottomSheetModalProvider: ({ children }) => children,
    BottomSheetBackdrop: props => <View {...props} />,
    BottomSheetTextInput: React.forwardRef((props, ref) => <TextInput ref={ref} {...props} />),
    BottomSheetFlashList: props => <ScrollView {...props} />,
    TouchableOpacity,
  };
});

jest.mock('react-native-fast-image', () => {
  const React = require('react');
  const { Image } = require('react-native');

  return Image;
});

jest.mock('@sbaiahmed1/react-native-blur', () => {
  const React = require('react');
  const { View } = require('react-native');

  return React.forwardRef((props, ref) => <View ref={ref} {...props} />);
});

jest.mock('@shopify/flash-list', () => {
  const React = require('react');
  const { FlatList } = require('react-native');

  return {
    FlashList: React.forwardRef((props, ref) => <FlatList ref={ref} {...props} />),
  };
});

jest.mock('@callstack/liquid-glass', () => {
  const React = require('react');
  const { View } = require('react-native');

  return {
    LiquidGlassView: React.forwardRef((props, ref) => <View ref={ref} {...props} />),
    LiquidGlassContainerView: React.forwardRef((props, ref) => <View ref={ref} {...props} />),
    isLiquidGlassSupported: false,
  };
});

jest.mock('@react-native-menu/menu', () => {
  const React = require('react');
  const { View } = require('react-native');

  return {
    MenuView: React.forwardRef((props, ref) => <View ref={ref} {...props} />),
  };
});

jest.mock('@react-navigation/native-stack', () => {
  const React = require('react');

  return {
    createNativeStackNavigator: () => ({
      Navigator: ({ children }) => children,
      Screen: () => null,
    }),
  };
});

jest.mock('@react-navigation/elements', () => ({
  useHeaderHeight: () => 0,
}));

jest.mock('@lodev09/react-native-true-sheet', () => {
  const React = require('react');
  const { View } = require('react-native');

  class TrueSheet extends React.Component {
    present = jest.fn(() => Promise.resolve());
    dismiss = jest.fn(() => Promise.resolve());
    dismissStack = jest.fn(() => Promise.resolve());
    resize = jest.fn(() => Promise.resolve());

    render() {
      return React.createElement(View, null, this.props.header, this.props.children, this.props.footer);
    }
  }

  return {
    TrueSheet,
    TrueSheetProvider: ({ children }) => children,
    useTrueSheet: () => ({
      present: jest.fn(() => Promise.resolve()),
      dismiss: jest.fn(() => Promise.resolve()),
      dismissStack: jest.fn(() => Promise.resolve()),
      resize: jest.fn(() => Promise.resolve()),
      dismissAll: jest.fn(() => Promise.resolve()),
    }),
  };
});

jest.mock('react-native-otp-entry', () => {
  const React = require('react');
  const { TextInput } = require('react-native');

  return {
    OtpInput: React.forwardRef((props, ref) => <TextInput ref={ref} {...props} />),
  };
});

jest.mock('@react-navigation/native', () => {
  const React = require('react');

  return {
    NavigationContext: React.createContext(undefined),
  };
});
