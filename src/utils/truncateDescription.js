export default function truncateDescription(text, charLimit = 150) {
  if (!text) return "";

  // If the entire text is already shorter than or equal to our limit, return it as-is
  if (text.length <= charLimit) {
    return text;
  }

  // Slice the text up to the character limit
  let truncated = text.substring(0, charLimit);

  // Find the last space within this substring to avoid cutting a word in half
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex > 0) {
    truncated = truncated.substring(0, lastSpaceIndex);
  }

  return `${truncated}...`;
}
