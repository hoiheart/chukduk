import * as React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const Nav = () => {
  const [value, setValue] = React.useState(0)

  const clickNav = (e: React.MouseEvent) => {
    console.log(e)
    e.preventDefault()
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
    >
      <BottomNavigationAction component="a" href="/community" onClick={clickNav} label="커뮤니티" icon={<RestoreIcon />}></BottomNavigationAction>
      <BottomNavigationAction component="a" href="/media" onClick={clickNav} label="미디어" icon={<FavoriteIcon />} />
      <BottomNavigationAction component="a" href="/fixtures" onClick={clickNav} label="일정" icon={<LocationOnIcon />} />
    </BottomNavigation>
  )
}

export default Nav
