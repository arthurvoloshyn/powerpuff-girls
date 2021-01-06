import { useSelector } from 'react-redux';

import { Details } from '../../components/details';
import { Episodes } from '../../components/episodes';

import { selectDetails, selectEpisodes } from '../../../shared/selectors';
import useRequestApiDetailsAndEpisodes from '../../../hooks/useRequestApiDetailsAndEpisodes';

export const DetailPage = () => {
  useRequestApiDetailsAndEpisodes();

  const details = useSelector(selectDetails);
  const episodes = useSelector(selectEpisodes);

  return (
    <section>
      <Details details={details} />
      <Episodes episodes={episodes} />
    </section>
  );
};
