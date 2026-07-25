function generateId(prefix = "item") {
  const timestamp = Date.now();

  const randomPart = Math.random()
    .toString(36)
    .substring(2, 8);

  return `${prefix}_${timestamp}_${randomPart}`;
}

export default generateId;