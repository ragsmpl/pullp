import React from 'react';
import { shallow, mount } from 'enzyme';
import { SelectRepos } from './';
import RepoCheckbox from './components/RepoCheckbox';

describe('SelectRepos', () => {
  const props = {
    githubError: null,
    requestWatchedRepos: jest.fn(),
    toggleRepoSelection: () => {},
  };

  it('renders successfully', () => {
    const component = shallow(<SelectRepos {...props} />);
    expect(component).toHaveLength(1);
  });

  it('renders a RepoCheckbox for each watched repo', () => {
    const component = shallow(
      <SelectRepos
        {...props}
        watchedRepos={[
          {
            name: 'Repo1',
            id: 'hjhgjhjgh==',
            url: 'test',
          },
          {
            name: 'Repo2',
            id: 'gdfdshgfghfgh==',
            url: 'test2',
          },
        ]}
      />,
    );
    expect(component.find(RepoCheckbox)).toHaveLength(2);
  });

  it('calls requestWatchedRepos when mounted', () => {
    const component = mount(<SelectRepos {...props} />);
    expect(component.requestWatchedRepos).toHaveBeenCalled;
  });
});