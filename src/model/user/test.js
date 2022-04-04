const schema = new mongoose.Schema({ name: 'string', size: 'string' });
const Tank = mongoose.model('Tank', schema);

const small = new Tank({ size: 'small' });
 small.save(function (err) {
    if (err) return handleError(err);
    // saved!
  });

