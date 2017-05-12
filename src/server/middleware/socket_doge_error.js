export default (packet, next) => {
    if (packet.doge === true) return next();
    next(new Error('Not a doge error'));
}