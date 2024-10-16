import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const UrlShortener = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [shortUrls, setShortUrls] = useState(() => {
    const savedUrls = localStorage.getItem("shortUrls");
    return savedUrls ? JSON.parse(savedUrls) : [];
  });
  const [copySuccess, setCopySuccess] = useState(null);
  const CORS_PROXY = "https://proxy.cors.sh/";
  const [isLoading, setIsLoading] = useState(false);
  const buttonText = "Copy";

  useEffect(() => {
    localStorage.setItem("shortUrls", JSON.stringify(shortUrls));
  }, [shortUrls]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        CORS_PROXY + "https://api.encurtador.dev/encurtamentos",
        { url: data.url },
        { headers: { "Content-Type": "application/json" } }
      );
      setShortUrls([
        ...shortUrls,
        { original: data.url, short: response.data.urlEncurtada },
      ]);
      reset();
    } catch (error) {
      console.error("Error acortando la URL:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="card__input">
      <form className="input__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__inputs">
          <div className="inputs__left">
            <input
              className={`left__input ${errors.url ? "input__error" : ""}`}
              type="url"
              placeholder="Shorten a link here..."
              {...register("url", { required: "Please add a link" })}
            />
            {errors.url && (
              <p style={{ color: "hsl(0, 87%, 67%)", fontStyle: "italic" }}>
                {errors.url.message}
              </p>
            )}
          </div>
          <button className="inputs__button" type="submit" disabled={isLoading}>
            {isLoading ? "Shortening..." : "Shorten It!"}
          </button>
        </div>
      </form>

      {isLoading && (
        <div className="loader">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      )}

      <div>
        {shortUrls.map((urlObj, index) => (
          <div
            className="url__result"
            key={index}
            style={{ marginTop: "10px" }}
          >
            <p className="result__text">{urlObj.original}</p>
            <hr className="result__line" />
            <div className="result__right">
              <a
                className="result__text"
                href={`https://${urlObj.short}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`https://${urlObj.short}`}
              </a>
              <CopyToClipboard
                text={urlObj.short}
                onCopy={() => setCopySuccess(index)}
              >
                <button
                  className={`result__button ${
                    copySuccess === index ? "copied" : ""
                  }`}
                >
                  {copySuccess === index ? "Copied!" : buttonText}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UrlShortener;
