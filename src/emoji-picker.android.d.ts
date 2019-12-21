import { EmojiLabel as EmojiLabelDefinition } from ".";
import { EmojiPicker as EmojiPickerDefinition } from ".";
import { EmojiLabelBase, EmojiPickerBase } from "./emoji-picker.common";
export * from "@nativescript/core/ui/text-base";
export * from "@nativescript/core/ui/text-field";
declare const com: any;
export declare class EmojiPicker extends EmojiPickerBase implements EmojiPickerDefinition {
    nativeView: any;
    emojiPopup: any;
    _configureEditText(editText: android.widget.EditText): void;
    setSecureAndKeyboardType(): void;
    _onReturnPress(): void;
    createNativeView(): object;
    initNativeView(): void;
    togglePopup(): void;
    disposeNativeView(): void;
}
export declare class EmojiLabel extends EmojiLabelBase implements EmojiLabelDefinition {
    nativeViewProtected: com.vanniktech.emoji.EmojiTextView;
    nativeTextViewProtected: com.vanniktech.emoji.EmojiTextView;
    EmojiLabelView: typeof com.vanniktech.emoji.EmojiTextView;
    textWrap: boolean;
    createNativeView(): object;
    initNativeView(): void;
    disposeNativeView(): void;
}
