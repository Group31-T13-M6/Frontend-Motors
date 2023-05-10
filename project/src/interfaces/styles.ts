export type ITag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label'
  | undefined;

export type IFontSize =
  | 'title-1-700'
  | 'title-2-600'
  | 'title-3-600'
  | 'title-3-500'
  | 'title-4-600'
  | 'title-4-500'
  | 'title-5-600'
  | 'title-5-500'
  | 'title-6-600'
  | 'title-6-500'
  | 'title-7-600'
  | 'title-7-500'
  | 'body-1-400'
  | 'body-1-600'
  | 'body-2-400'
  | 'body-2-500'
  | 'body-3-500'
  | 'button-big-text'
  | 'button-medium-text'
  | 'input-placeholder'
  | 'input-label'
  | undefined;

export type IColor =
  | 'brand1'
  | 'brand2'
  | 'brand3'
  | 'brand4'
  | 'grey0'
  | 'grey1'
  | 'grey2'
  | 'grey3'
  | 'grey4'
  | 'grey5'
  | 'grey6'
  | 'grey7'
  | 'grey8'
  | 'grey9'
  | 'grey10'
  | 'whiteFixed'
  | 'alert1'
  | 'alert2'
  | 'alert3'
  | 'success1'
  | 'success2'
  | 'success3'
  | 'random1'
  | 'random2'
  | 'random3'
  | 'random4'
  | 'random5'
  | 'random6'
  | 'random7'
  | 'random8'
  | 'random9'
  | 'random10'
  | 'random11'
  | 'random12';

export interface ITitleComponent {
  tag?: ITag;
  children: React.ReactNode;
  className?: string;
  color?: IColor;
  fontSize?: IFontSize;
}

export interface IPropsStyle {
  background?: string;
  textColor?: string;
  width?: string;
  height?: string;
  borderColor?: string;
  font?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  placeholderColor?: string;
  placeholderColorFocus?: string;
  radius?: string;
  padding?: string;
  backgroundDisabled?: string;
}
