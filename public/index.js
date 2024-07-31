const translateHandler = async () => {
  const textArea = document.getElementById("text-input");
  const localeArea = document.getElementById("locale-select");
  const errorArea = document.getElementById("error-msg");
  const translatedArea = document.getElementById("translated-sentence");

  errorArea.innerText = "";
  translatedArea.innerText = "";

  try {
    const response = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: textArea.value, locale: localeArea.value })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const parsed = await response.json();

    if (parsed.error) {
      errorArea.innerText = parsed.error;
    } else {
      translatedArea.innerHTML = parsed.translation;
    }
  } catch (error) {
    errorArea.innerText = `An error occurred: ${error.message}`;
  }
};

document.getElementById("translate-btn").addEventListener("click", translateHandler);
