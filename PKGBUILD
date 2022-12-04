_npmname=mctranslate
_npmver=1.0.0
pkgname=mctranslate # All lowercase
pkgver=1.0.0
pkgrel=1
pkgdesc="A CLI Tool for translate a sentence into minecraft enchanting alphabet."
arch=(any)
url="https://github.com/SantiagoAvila21/MinecraftTranslator#readme"
license=('GNU General Public License v3.0')
depends=('nodejs' 'npm')
optdepends=()
source=(https://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz)
noextract=($_npmname-$_npmver.tgz)
sha1sums=(4cd6caae1b15a2b169fd10742fcdb7c63c3dbf4a)

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver
  chown -R root:root "$pkgdir"
}

# vim:set ts=2 sw=2 et:
