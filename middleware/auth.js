export default function (context) {
  if (!context.app.store.getters['auth/isAuthenticated']) {
    context.redirect('/admin/auth');
  }
}
