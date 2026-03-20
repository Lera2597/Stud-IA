export default function tax(price) {
    const tax = 19;
    return price * (1 + tax / 100);
}