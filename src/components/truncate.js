export default function truncate(str, n) {
  // function to reduce the charater
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
}
