import type { InstallButton } from "./install-button.js";

export const connect = async (button: InstallButton, bloxLogOnly: any) => {
  console.log("Additional parameter:", bloxLogOnly);
  import("./install-dialog.js");
  let port: SerialPort | undefined;
  try {
    port = await navigator.serial.requestPort();
  } catch (err: any) {
    if ((err as DOMException).name === "NotFoundError") {
      import("./no-port-picked/index").then((mod) =>
        mod.openNoPortPickedDialog(() => connect(button, bloxLogOnly)),
      );
      return;
    }
    alert(`Error: ${err.message}`);
    return;
  }

  if (!port) {
    return;
  }

  try {
    await port.open({ baudRate: 115200 });
  } catch (err: any) {
    alert(err.message);
    return;
  }

  const el = document.createElement("ewt-install-dialog");
  el.port = port;
  el.bloxLogOnly = bloxLogOnly;
  el.manifestPath = button.manifest || button.getAttribute("manifest")!;
  el.overrides = button.overrides;
  el.addEventListener(
    "closed",
    () => {
      port!.close();
    },
    { once: true },
  );
  document.body.appendChild(el);
};
