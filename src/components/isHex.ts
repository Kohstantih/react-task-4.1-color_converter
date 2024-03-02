export default function isHex (value: string) {
    if (/^#[0-9a-f]{6}/.test(value)) return true;

    return false;
}