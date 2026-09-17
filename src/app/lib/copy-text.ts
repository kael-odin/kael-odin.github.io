/**
 * 复制文本到剪贴板，返回是否成功。
 *
 * 优先用 Clipboard API；它在两种情况下会失败：
 * 页面不是安全上下文（http），或标签页没有获得焦点。
 * 所以失败时回退到 textarea + execCommand 的老办法。
 */
export async function copyText(value: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    // 忽略，继续走下面的兜底方案
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-1000px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, value.length);
    const succeeded = document.execCommand("copy");

    document.body.removeChild(textarea);
    return succeeded;
  } catch {
    return false;
  }
}
