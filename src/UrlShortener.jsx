import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const UrlShortener = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [shortUrls, setShortUrls] = useState([]);
  const [copySuccess, setCopySuccess] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://api.encurtador.dev/encurtamentos', 
        { url: data.url },
        { headers: {'Content-Type': 'application/json'} }
      );
      setShortUrls([...shortUrls, response.data.urlEncurtada]);
      reset();
    } catch (error) {
      console.error('Error acortando la URL:', error);
    }
  };

  return (
    <div className='card__input'>
      <form className='input__form' onSubmit={handleSubmit(onSubmit)}>
        <input 
          className='form__input'
          type="url" 
          placeholder="Shorten a link here..." 
          {...register('url', { required: "Please add a link" })} 
        />
        <button className='form__button' type="submit">Shorten It!</button>
        {errors.url && <p style={{ color: 'red' }}>{errors.url.message}</p>}
      </form>
      
      <div>
        {shortUrls.map((url, index) => (
          <div key={index} style={{ marginTop: '10px' }}>
            <p>Short URL: {url}</p>
            <CopyToClipboard text={url} onCopy={() => setCopySuccess(index)}>
              <button>Copy to Clipboard</button>
            </CopyToClipboard>
            {copySuccess === index && <span style={{color: 'green'}}> Copied!</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UrlShortener;
