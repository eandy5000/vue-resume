import images from './images'

const array = [
  {
    'name': 'AngularJS',
    'type': 'Technology',
    'img': images.angular,
    'description': 'Some junk'
  },
  {
    'name': 'Express',
    'type': 'Technology',
    'img': images.express,
    'description': 'Some junk'
  },
  {
    'name': 'AMU',
    'type': 'Education',
    'img': images.amu,
    'description': 'Some junk'
  }
]

export default () => {
  return array
}

