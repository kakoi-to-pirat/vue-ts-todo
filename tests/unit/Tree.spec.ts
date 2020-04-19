import { mount, createLocalVue } from '@vue/test-utils';
import Tree from '@/components/Tree.vue';
import { TreeService } from '@/services/TreeService';
import { StaticUsersRoles } from '../../__fixtures__';

const localVue = createLocalVue();

const wrapper = mount(Tree, {
  localVue,
  mocks: { treeService: new TreeService() },
  propsData: { data: StaticUsersRoles, editableField: 'isApprove' },
});

describe('Tree.vue', () => {
  it('set props.data when passed', () => {
    expect(wrapper.isVueInstance()).toBe(true);
    expect(wrapper.props('data')).toEqual(StaticUsersRoles);
  });
  it('shold match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
